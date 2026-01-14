import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblTitSubClassInputObjectSchema as tblTitlesCreateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesCreateWithoutTblTitSubClassInput.schema';
import { tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema as tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblTitSubClassInput.schema';
import { tblTitlesCreateOrConnectWithoutTblTitSubClassInputObjectSchema as tblTitlesCreateOrConnectWithoutTblTitSubClassInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblTitSubClassInput.schema';
import { tblTitlesUpsertWithoutTblTitSubClassInputObjectSchema as tblTitlesUpsertWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUpsertWithoutTblTitSubClassInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateToOneWithWhereWithoutTblTitSubClassInputObjectSchema as tblTitlesUpdateToOneWithWhereWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUpdateToOneWithWhereWithoutTblTitSubClassInput.schema';
import { tblTitlesUpdateWithoutTblTitSubClassInputObjectSchema as tblTitlesUpdateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUpdateWithoutTblTitSubClassInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblTitSubClassInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblTitSubClassInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblTitSubClassInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblTitSubClassInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblTitSubClassInputObjectSchema).optional(),
  upsert: z.lazy(() => tblTitlesUpsertWithoutTblTitSubClassInputObjectSchema).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblTitlesUpdateToOneWithWhereWithoutTblTitSubClassInputObjectSchema), z.lazy(() => tblTitlesUpdateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblTitSubClassInputObjectSchema)]).optional()
}).strict();
export const tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInput>;
export const tblTitlesUpdateOneRequiredWithoutTblTitSubClassNestedInputObjectZodSchema = makeSchema();
