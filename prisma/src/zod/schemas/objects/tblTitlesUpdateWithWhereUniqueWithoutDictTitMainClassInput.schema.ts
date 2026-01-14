import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateWithoutDictTitMainClassInputObjectSchema as tblTitlesUpdateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUpdateWithoutDictTitMainClassInput.schema';
import { tblTitlesUncheckedUpdateWithoutDictTitMainClassInputObjectSchema as tblTitlesUncheckedUpdateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblTitlesUpdateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const tblTitlesUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateWithWhereUniqueWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateWithWhereUniqueWithoutDictTitMainClassInput>;
export const tblTitlesUpdateWithWhereUniqueWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
