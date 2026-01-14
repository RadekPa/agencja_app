import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema as tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesCreateWithoutTblTitAuthorsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitAuthorsInput.schema';
import { tblTitlesCreateOrConnectWithoutTblTitAuthorsInputObjectSchema as tblTitlesCreateOrConnectWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblTitAuthorsInput.schema';
import { tblTitlesUpsertWithoutTblTitAuthorsInputObjectSchema as tblTitlesUpsertWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUpsertWithoutTblTitAuthorsInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateToOneWithWhereWithoutTblTitAuthorsInputObjectSchema as tblTitlesUpdateToOneWithWhereWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUpdateToOneWithWhereWithoutTblTitAuthorsInput.schema';
import { tblTitlesUpdateWithoutTblTitAuthorsInputObjectSchema as tblTitlesUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUpdateWithoutTblTitAuthorsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitAuthorsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitAuthorsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblTitAuthorsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblTitlesUpsertWithoutTblTitAuthorsInputObjectSchema).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblTitlesUpdateToOneWithWhereWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblTitlesUpdateWithoutTblTitAuthorsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitAuthorsInputObjectSchema)]).optional()
}).strict();
export const tblTitlesUpdateOneRequiredWithoutTblTitAuthorsNestedInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateOneRequiredWithoutTblTitAuthorsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateOneRequiredWithoutTblTitAuthorsNestedInput>;
export const tblTitlesUpdateOneRequiredWithoutTblTitAuthorsNestedInputObjectZodSchema = makeSchema();
