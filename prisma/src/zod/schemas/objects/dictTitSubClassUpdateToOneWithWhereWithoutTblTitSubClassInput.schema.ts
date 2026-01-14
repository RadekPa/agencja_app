import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './dictTitSubClassWhereInput.schema';
import { dictTitSubClassUpdateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUpdateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUpdateWithoutTblTitSubClassInput.schema';
import { dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInputObjectSchema as dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInputObjectSchema } from './dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitSubClassWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictTitSubClassUpdateWithoutTblTitSubClassInputObjectSchema), z.lazy(() => dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInputObjectSchema)])
}).strict();
export const dictTitSubClassUpdateToOneWithWhereWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpdateToOneWithWhereWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateToOneWithWhereWithoutTblTitSubClassInput>;
export const dictTitSubClassUpdateToOneWithWhereWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
