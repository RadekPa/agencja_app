import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassWhereUniqueInputObjectSchema as dictTitMainClassWhereUniqueInputObjectSchema } from './dictTitMainClassWhereUniqueInput.schema';
import { dictTitMainClassCreateWithoutTblTitlesInputObjectSchema as dictTitMainClassCreateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassCreateWithoutTblTitlesInput.schema';
import { dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema as dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitMainClassWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const dictTitMainClassCreateOrConnectWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictTitMainClassCreateOrConnectWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassCreateOrConnectWithoutTblTitlesInput>;
export const dictTitMainClassCreateOrConnectWithoutTblTitlesInputObjectZodSchema = makeSchema();
