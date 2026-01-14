import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesCreateWithoutDictTitMainClassInputObjectSchema as tblTitlesCreateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesCreateWithoutDictTitMainClassInput.schema';
import { tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema as tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema } from './tblTitlesUncheckedCreateWithoutDictTitMainClassInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutDictTitMainClassInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutDictTitMainClassInputObjectSchema)])
}).strict();
export const tblTitlesCreateOrConnectWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutDictTitMainClassInput>;
export const tblTitlesCreateOrConnectWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
