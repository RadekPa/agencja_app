import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassUpdateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUpdateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUpdateWithoutTblTitSubClassInput.schema';
import { dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInput.schema';
import { dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassCreateWithoutTblTitSubClassInput.schema';
import { dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUncheckedCreateWithoutTblTitSubClassInput.schema';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './dictTitSubClassWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictTitSubClassUpdateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInputObjectSchema)]),
  create: z.union([z.lazy(() => dictTitSubClassCreateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedCreateWithoutTblTitSubClassInputObjectSchema)]),
  where: z.lazy(() => dictTitSubClassWhereInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUpsertWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpsertWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpsertWithoutTblTitSubClassInput>;
export const dictTitSubClassUpsertWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
