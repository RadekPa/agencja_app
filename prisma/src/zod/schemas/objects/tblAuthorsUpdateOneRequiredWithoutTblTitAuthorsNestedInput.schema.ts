import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsCreateWithoutTblTitAuthorsInput.schema';
import { tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUncheckedCreateWithoutTblTitAuthorsInput.schema';
import { tblAuthorsCreateOrConnectWithoutTblTitAuthorsInputObjectSchema as tblAuthorsCreateOrConnectWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsCreateOrConnectWithoutTblTitAuthorsInput.schema';
import { tblAuthorsUpsertWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUpsertWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUpsertWithoutTblTitAuthorsInput.schema';
import { tblAuthorsWhereUniqueInputObjectSchema as tblAuthorsWhereUniqueInputObjectSchema } from './tblAuthorsWhereUniqueInput.schema';
import { tblAuthorsUpdateToOneWithWhereWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUpdateToOneWithWhereWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUpdateToOneWithWhereWithoutTblTitAuthorsInput.schema';
import { tblAuthorsUpdateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUpdateWithoutTblTitAuthorsInput.schema';
import { tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema as tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAuthorsCreateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblAuthorsUncheckedCreateWithoutTblTitAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAuthorsCreateOrConnectWithoutTblTitAuthorsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblAuthorsUpsertWithoutTblTitAuthorsInputObjectSchema).optional(),
  connect: z.lazy(() => tblAuthorsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblAuthorsUpdateToOneWithWhereWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblAuthorsUpdateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblAuthorsUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema)]).optional()
}).strict();
export const tblAuthorsUpdateOneRequiredWithoutTblTitAuthorsNestedInputObjectSchema: z.ZodType<Prisma.tblAuthorsUpdateOneRequiredWithoutTblTitAuthorsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsUpdateOneRequiredWithoutTblTitAuthorsNestedInput>;
export const tblAuthorsUpdateOneRequiredWithoutTblTitAuthorsNestedInputObjectZodSchema = makeSchema();
