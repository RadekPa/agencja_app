import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictSubmSentTypeWhereUniqueInputObjectSchema as dictSubmSentTypeWhereUniqueInputObjectSchema } from './dictSubmSentTypeWhereUniqueInput.schema';
import { dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeCreateWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictSubmSentTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInput>;
export const dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
