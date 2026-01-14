import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesScalarWhereInputObjectSchema as tblTitlesScalarWhereInputObjectSchema } from './tblTitlesScalarWhereInput.schema';
import { tblTitlesUpdateManyMutationInputObjectSchema as tblTitlesUpdateManyMutationInputObjectSchema } from './tblTitlesUpdateManyMutationInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutDictTitMainClassInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblTitlesUpdateManyMutationInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateManyWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const tblTitlesUpdateManyWithWhereWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateManyWithWhereWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateManyWithWhereWithoutDictTitMainClassInput>;
export const tblTitlesUpdateManyWithWhereWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
