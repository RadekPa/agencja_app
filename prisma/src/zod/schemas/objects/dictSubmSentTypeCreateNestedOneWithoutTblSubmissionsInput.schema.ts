import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeCreateWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema as dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema } from './dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInput.schema';
import { dictSubmSentTypeWhereUniqueInputObjectSchema as dictSubmSentTypeWhereUniqueInputObjectSchema } from './dictSubmSentTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictSubmSentTypeCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictSubmSentTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictSubmSentTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema).optional(),
  connect: z.lazy(() => dictSubmSentTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictSubmSentTypeCreateNestedOneWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeCreateNestedOneWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeCreateNestedOneWithoutTblSubmissionsInput>;
export const dictSubmSentTypeCreateNestedOneWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
