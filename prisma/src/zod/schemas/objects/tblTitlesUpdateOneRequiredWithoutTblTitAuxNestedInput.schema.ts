import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblTitAuxInputObjectSchema as tblTitlesCreateWithoutTblTitAuxInputObjectSchema } from './tblTitlesCreateWithoutTblTitAuxInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitAuxInput.schema';
import { tblTitlesCreateOrConnectWithoutTblTitAuxInputObjectSchema as tblTitlesCreateOrConnectWithoutTblTitAuxInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblTitAuxInput.schema';
import { tblTitlesUpsertWithoutTblTitAuxInputObjectSchema as tblTitlesUpsertWithoutTblTitAuxInputObjectSchema } from './tblTitlesUpsertWithoutTblTitAuxInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateToOneWithWhereWithoutTblTitAuxInputObjectSchema as tblTitlesUpdateToOneWithWhereWithoutTblTitAuxInputObjectSchema } from './tblTitlesUpdateToOneWithWhereWithoutTblTitAuxInput.schema';
import { tblTitlesUpdateWithoutTblTitAuxInputObjectSchema as tblTitlesUpdateWithoutTblTitAuxInputObjectSchema } from './tblTitlesUpdateWithoutTblTitAuxInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitAuxInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitAuxInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitAuxInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitAuxInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitAuxInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblTitAuxInputObjectSchema).optional(),
  upsert: z.lazy(() => tblTitlesUpsertWithoutTblTitAuxInputObjectSchema).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblTitlesUpdateToOneWithWhereWithoutTblTitAuxInputObjectSchema), z.lazy(() => tblTitlesUpdateWithoutTblTitAuxInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitAuxInputObjectSchema)]).optional()
}).strict();
export const tblTitlesUpdateOneRequiredWithoutTblTitAuxNestedInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateOneRequiredWithoutTblTitAuxNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateOneRequiredWithoutTblTitAuxNestedInput>;
export const tblTitlesUpdateOneRequiredWithoutTblTitAuxNestedInputObjectZodSchema = makeSchema();
